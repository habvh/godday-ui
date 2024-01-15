const domains = [
  {
    name: ".online",
    price: 0.99,
  },
  {
    name: ".net",
    price: 14.99,
  },
  {
    name: ".inc",
    price: 999.99,
  },
];

export function Domains() {
  return (
    <section className="flex gap-4 items-center justify-center">
      {domains.map((domain) => (
        <article>
          <span className="font-bold">{domain.name}</span>
          <span className="pl-2">
            ${domain.price}
            <sup>*</sup>
          </span>
        </article>
      ))}
    </section>
  );
}
