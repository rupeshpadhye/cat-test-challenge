import React from 'react';

export const imgCache: any = {
  __cache: {} as any,
  read(src: string): boolean | Promise<boolean> {
    if (!src) {
      return false;
    }

    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache[src]);
        };
        img.src = src;
        setTimeout(() => resolve({}), 7000);
      }).then(() => {
        this.__cache[src] = true;
      });
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }
    return this.__cache[src];
  },
};

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, ...rest }) => {
  imgCache.read(src);

  return <img src={src} {...rest} />;
};
