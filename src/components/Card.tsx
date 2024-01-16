import React from "react";
import { Button } from "./Button";
import { Image } from "./Image";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  cardStep: number;
  cardTitle: string;
  cardButtonText?: string;
};

function convertNumberToString(num: number): string {
  return num.toLocaleString("us", { minimumIntegerDigits: 2 });
}

export default function Card({
  className,
  children,
  imageUrl,
  imageAlt,
  cardStep,
  cardTitle,
  cardButtonText,
}: CardProps) {
  return (
    <section className={className}>
      <Image
        className="min-h-[40vw] lg:max-h-[45vw]"
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
      <article>
        <p className="mt-8 mb-2 font-bold text-sm">
          {convertNumberToString(cardStep)}
        </p>
        <p className="font-bold text-2xl mb-2">{cardTitle}</p>
        <div className="my-4">{children}</div>
        {cardButtonText ? (
          <div className="flex flex-col lg:items-center gap-4 lg:flex-row">
            <Button>{cardButtonText}</Button>
            <div className="hidden sm:block">
              <a href="" target="_blank">
                Learn more
              </a>
            </div>
          </div>
        ) : (
          <div>
            <Button>Learn more</Button>
          </div>
        )}
      </article>
    </section>
  );
}
