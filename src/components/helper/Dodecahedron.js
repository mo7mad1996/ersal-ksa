export default function Dodecahedron() {
  return (
    <div className="mil-dodecahedron">
      {Array(12)
        .fill(0)
        .map((d) => (
          <div className="mil-pentagon">
            {Array(6)
              .fill(0)
              .map((d) => (
                <div></div>
              ))}
          </div>
        ))}
    </div>
  );
}
