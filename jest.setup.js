// Optional: configure or set up a testing framework before each test.
import '@testing-library/jest-dom';
import 'jest-styled-components';

// Mock do IntersectionObserver se estiver usando recursos que dependem dele
class MockIntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock para elementos de mídia HTML5
Object.defineProperty(window.HTMLMediaElement.prototype, 'muted', {
  set: jest.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  value: jest.fn().mockImplementation(() => Promise.resolve()),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  value: jest.fn(),
});

// Suprimir console.error, console.warn e console.log durante os testes
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
};