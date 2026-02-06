export default function RequestNurse() {
  return (
    <form className="form">

      <h3>Request Nurse</h3>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Location" />
      <input placeholder="Duration" />
      <input placeholder="Phone" />

      <button className="btn-primary">
        Submit
      </button>

    </form>
  );
}
