import toast from "react-hot-toast";

/**
 * Handles HTTP error status codes and displays appropriate toast messages
 *
 * This utility function provides consistent error handling across the application
 * by mapping HTTP status codes to user-friendly error messages and displaying them
 * as toast notifications.
 *
 * @param {Response} response - The fetch Response object
 * @param {string} [customMessage] - Optional custom prefix for error messages
 * @returns {void} - Doesn't return anything, but shows toast and throws error
 * @throws {Error} - Throws an error with the formatted error message
 */
export const handleErrorStatusCode = (
  response: Response,
  customMessage?: string
): never => {
  const errorPrefix = customMessage || "Erro na requisição";
  let errorMessage = "";

  switch (response.status) {
    case 400:
      errorMessage = "Requisição inválida";
      break;
    case 401:
      errorMessage = "Não autorizado";
      break;
    case 404:
      errorMessage = "Recurso não encontrado";
      break;
      break;
    case 500:
      errorMessage = "Erro interno do servidor";
      break;

    default:
      errorMessage = `Status ${response.status}`;
  }

  const fullErrorMessage = `${errorPrefix}: ${errorMessage}`;

  toast.error(fullErrorMessage);

  throw new Error(`${fullErrorMessage} (${response.statusText})`);
};

/**
 * Handles network or unexpected errors and displays a toast notification
 *
 * @param {unknown} error - The caught error
 * @param {string} fallbackMessage - Fallback message to display if not already handled
 * @param {string} [context] - Optional context to include in error logging
 * @returns {never} - Always throws the error after handling
 */
export const handleApiError = (
  error: unknown,
  fallbackMessage: string,
  context?: string
): never => {
  // If error was already handled by handleErrorStatusCode, don't show duplicate toast
  if (!(error instanceof Error && error.message.includes(fallbackMessage))) {
    toast.error(fallbackMessage);
  }

  if (context) {
    console.error(`API Error (${context}):`, error);
  } else {
    console.error("API Error:", error);
  }

  throw error;
};
