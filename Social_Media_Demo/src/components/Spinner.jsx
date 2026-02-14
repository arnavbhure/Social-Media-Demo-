const Spinner = () => {
  return (
    <>
      <div class="text-center" style={{ margin: "2rem" }}>
        <div
          class="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
