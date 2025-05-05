export const setupNextImageMock = () => {
  jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: { 
      'data-testid'?: string; 
      src: string; 
      alt?: string;
      width?: number;
      height?: number;
      priority?: boolean;
    }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        data-testid={props['data-testid'] || 'next-image-mock'} 
        src={props.src} 
        alt={props.alt || ''} 
        width={props.width} 
        height={props.height}
      />
    ),
  }));
};

const nextImageMock = { setupNextImageMock };

export default nextImageMock;