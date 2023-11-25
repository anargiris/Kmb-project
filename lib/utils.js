export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getInitials = (name) => {
  let words = name.split(" ");

  let initials = words.map((word) => word[0].toUpperCase());

  return initials.join("");
};

export const getFirstName = (fullName) => {
  let words = fullName.split(" ");

  return words[0];
};

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
