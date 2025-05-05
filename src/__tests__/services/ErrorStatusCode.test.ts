import { handleErrorStatusCode, handleApiError } from '@/services/ErrorStatusCode';
import toast from 'react-hot-toast';

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
}));

// Mock console.error
const originalConsoleError = console.error;
console.error = jest.fn();

describe('ErrorStatusCode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  describe('handleErrorStatusCode', () => {
    it('should handle 400 error', () => {
      const mockResponse = {
        status: 400,
        statusText: 'Bad Request'
      } as Response;

      expect(() => handleErrorStatusCode(mockResponse)).toThrow('Erro na requisição: Requisição inválida');
      expect(toast.error).toHaveBeenCalledWith('Erro na requisição: Requisição inválida');
    });

    it('should handle 401 error', () => {
      const mockResponse = {
        status: 401,
        statusText: 'Unauthorized'
      } as Response;

      expect(() => handleErrorStatusCode(mockResponse)).toThrow('Erro na requisição: Não autorizado');
      expect(toast.error).toHaveBeenCalledWith('Erro na requisição: Não autorizado');
    });

    it('should handle 404 error', () => {
      const mockResponse = {
        status: 404,
        statusText: 'Not Found'
      } as Response;

      expect(() => handleErrorStatusCode(mockResponse)).toThrow('Erro na requisição: Recurso não encontrado');
      expect(toast.error).toHaveBeenCalledWith('Erro na requisição: Recurso não encontrado');
    });

    it('should handle 500 error', () => {
      const mockResponse = {
        status: 500,
        statusText: 'Internal Server Error'
      } as Response;

      expect(() => handleErrorStatusCode(mockResponse)).toThrow('Erro na requisição: Erro interno do servidor');
      expect(toast.error).toHaveBeenCalledWith('Erro na requisição: Erro interno do servidor');
    });

    it('should handle unknown error status', () => {
      const mockResponse = {
        status: 503,
        statusText: 'Service Unavailable'
      } as Response;

      expect(() => handleErrorStatusCode(mockResponse)).toThrow('Erro na requisição: Status 503');
      expect(toast.error).toHaveBeenCalledWith('Erro na requisição: Status 503');
    });

    it('should use custom error message prefix', () => {
      const mockResponse = {
        status: 404,
        statusText: 'Not Found'
      } as Response;
      const customPrefix = 'Falha ao buscar produtos';

      expect(() => handleErrorStatusCode(mockResponse, customPrefix)).toThrow('Falha ao buscar produtos: Recurso não encontrado');
      expect(toast.error).toHaveBeenCalledWith('Falha ao buscar produtos: Recurso não encontrado');
    });
  });

  describe('handleApiError', () => {
    it('should show toast with fallback message for non-Error objects', () => {
      const error = 'string error';
      const fallbackMessage = 'Falha na operação';

      expect(() => handleApiError(error, fallbackMessage)).toThrow();
      expect(toast.error).toHaveBeenCalledWith(fallbackMessage);
      expect(console.error).toHaveBeenCalled();
    });

    it('should not show duplicate toast if error already contains fallback message', () => {
      const error = new Error('Falha na operação: detalhes do erro');
      const fallbackMessage = 'Falha na operação';

      expect(() => handleApiError(error, fallbackMessage)).toThrow();
      expect(toast.error).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });

    it('should include context in logged error if provided', () => {
      const error = 'network error';
      const fallbackMessage = 'Falha na requisição';
      const context = 'getProductDetails';

      expect(() => handleApiError(error, fallbackMessage, context)).toThrow();
      expect(console.error).toHaveBeenCalledWith('API Error (getProductDetails):', error);
      expect(toast.error).toHaveBeenCalledWith(fallbackMessage);
    });
  });
});