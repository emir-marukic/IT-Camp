// jednostavna komponenta koja preko propsa dobija title, selected, handleClick funkciju
// prikazete title kao text, selected vam je vrednost da li je ovaj element selected
// handleClick vam menja da li je item selectovan ili ne.

function ListItem() {
  const { selected, title, onSelect } = this.props.first;

  return (
    <div>
      <p onClick={onSelect}>
        <input type="text" checked={selected} /> {title}
      </p>
    </div>
  );
}

export default ListItem;
