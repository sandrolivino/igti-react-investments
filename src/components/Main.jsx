export default function Main({ children = <p>Conteúdo de main</p> }) {
  return (
    <main>
      <div className="container mx-auto p-4">{children}</div>
    </main>
  );
}
