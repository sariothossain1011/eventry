import { RegisterUser } from "@/app/action";

const RegistrationForm = () => {
  return (
    <form class="login-form" action={RegisterUser}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input class="min-h-16" type="text" name="bio" id="bio" />
      </div>

      <button
        type="submit"
        class="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
