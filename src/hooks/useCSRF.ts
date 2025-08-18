/**
 * useCSRF Hook
 * Manages CSRF token fetching and header creation
 */

import { useState, useEffect } from 'react';

interface CSRFState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useCSRF() {
  const [state, setState] = useState<CSRFState>({
    token: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    async function fetchCSRFToken() {
      try {
        const response = await fetch('/api/csrf-token');
        
        if (!response.ok) {
          throw new Error('Failed to fetch CSRF token');
        }
        
        const data = await response.json();
        
        setState({
          token: data.token,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState({
          token: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    fetchCSRFToken();
  }, []);

  return state;
}

/**
 * Helper function to add CSRF token to request headers
 */
export function addCSRFHeader(
  headers: Record<string, string>,
  token: string | null
): Record<string, string> {
  if (!token) {
    return headers;
  }
  
  return {
    ...headers,
    'X-CSRF-Token': token
  };
}