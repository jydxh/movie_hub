import { Button } from "@mui/material";
import { ActionFunction, Form, redirect } from "react-router-dom";

export const action: ActionFunction = async ({
	request,
}): Promise<Response> => {
	const rawData = await request.formData();
	const formData = Object.fromEntries(rawData);
	console.log(formData);
	alert(
		"sending data to back end for authentication and return the JWT, the Backend Comming soon"
	);
	return redirect("/");
};

function Login() {
	return (
		<div className="grid place-content-center h-screen">
			<Form method="POST" className=" border rounded-xl p-8 w-[30rem]">
				<p className="text-center mx-auto text-3xl font-semibold">Login</p>
				<div className="mt-8 flex justify-center items-center gap-x-4">
					<label htmlFor="username" className="text-xl">
						Username
					</label>
					<input
						placeholder="username / email address"
						id="username"
						type="text"
						name="username"
						className="bg-slate-600 rounded p-2"
					/>
				</div>
				<div className="mt-8 flex justify-center items-center gap-x-4">
					<label htmlFor="password" className="text-xl">
						Password
					</label>
					<input
						placeholder="password"
						id="password"
						type="password"
						name="password"
						className="bg-slate-600 rounded p-2"
					/>
				</div>
				<div className="mt-8 flex justify-center items-center gap-x-4">
					<Button color="primary" type="submit">
						Login
					</Button>
					<Button color="secondary" type="reset">
						Reset
					</Button>
				</div>
			</Form>
		</div>
	);
}
export default Login;
