export default function Dodecahedron() {
  return (
    <div className="mil-dodecahedron">
      {Array(12)
        .fill(0)
        .map((d) => (
          <div className="mil-pentagon" key={Math.random()}>
            {Array(6)
              .fill(0)
              .map((d) => (
                <div key={Math.random()}></div>
              ))}
          </div>
        ))}
    </div>
  );
}
