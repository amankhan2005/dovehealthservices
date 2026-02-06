export default function ApplyNurse() {
  return (
    <form className="form">

      <h3>Apply as Nurse</h3>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Location" />
      <input placeholder="Duration" />
      <input placeholder="Phone" />
      <input placeholder="Experience" />

      <input type="file" />

      <button className="btn-primary">
        Apply
      </button>

    </form>
  );
}
