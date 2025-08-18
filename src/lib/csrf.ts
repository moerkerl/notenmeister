/**
 * CSRF (Cross-Site Request Forgery) Protection
 * Handles token generation and validation
 */

import { createHash, randomBytes } from 'crypto';
import { NextRequest } from 'next/server';

const CSRF_SECRET = process.env.CSRF_SECRET || '';
const TOKEN_LIFETIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export interface CSRFErrorResponse {
  success: false;
  error: string;
  errorType: 'csrf';
}

export const CSRF_ERROR_RESPONSE: CSRFErrorResponse = {
  success: false,
  error: 'CSRF validation failed. Please refresh the page and try again.',
  errorType: 'csrf'
};

/**
 * Generate a CSRF token
 */
export function generateCSRFToken(): string {
  if (!CSRF_SECRET) {
    throw new Error('CSRF_SECRET environment variable is not set');
  }
  
  const timestamp = Date.now().toString();
  const randomValue = randomBytes(16).toString('hex');
  const payload = `${timestamp}:${randomValue}`;
  
  // Create HMAC signature
  const signature = createHash('sha256')
    .update(payload + CSRF_SECRET)
    .digest('hex');
  
  // Combine payload and signature
  return Buffer.from(`${payload}:${signature}`).toString('base64');
}

/**
 * Validate a CSRF token
 */
export function validateCSRFToken(token: string): boolean {
  if (!CSRF_SECRET) {
    console.warn('CSRF_SECRET environment variable is not set');
    return false;
  }
  
  try {
    // Decode the token
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const parts = decoded.split(':');
    
    if (parts.length !== 3) {
      return false;
    }
    
    const [timestamp, randomValue, signature] = parts;
    const payload = `${timestamp}:${randomValue}`;
    
    // Verify signature
    const expectedSignature = createHash('sha256')
      .update(payload + CSRF_SECRET)
      .digest('hex');
    
    if (signature !== expectedSignature) {
      return false;
    }
    
    // Check if token is expired
    const tokenTime = parseInt(timestamp);
    const now = Date.now();
    
    if (now - tokenTime > TOKEN_LIFETIME) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Extract and validate CSRF token from request headers
 */
export function validateCSRFFromRequest(request: NextRequest): boolean {
  const token = request.headers.get('X-CSRF-Token');
  
  if (!token) {
    return false;
  }
  
  return validateCSRFToken(token);
}