import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
