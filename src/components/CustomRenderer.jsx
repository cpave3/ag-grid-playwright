export const CustomRenderer = (props) => {
  return <span>{`$${props.value.toLocaleString()}`}</span>;
};
