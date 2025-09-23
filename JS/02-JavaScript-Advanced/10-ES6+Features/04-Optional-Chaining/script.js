const user = {
  profile: {
    address: { city: "Delhi" },
  },
};

console.log(user.profile?.address?.city); // "Delhi"
console.log(user.profile?.phone?.number); // undefined (error nahi)
