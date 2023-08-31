const IconCall = props => {
  return (
    <svg
      viewBox="0 0 16 16"
      height="1.6em"
      width="1.6em"
      {...props}
    >
      <path
        d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
      />
    </svg>
  );
}

const IconVideoCall = props => {
  return (
    <svg
      viewBox="0 0 576 512"
      height="1.6em"
      width="1.6em"
      {...props}
    >
      <path d="M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm559.1-28.2c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64-14.2-9.5V174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
    </svg>
  );
}


export {IconCall, IconVideoCall};