// import prisma from "@/prisma/db";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// // when the user pass a successfull signup with clerk, the user force-redirect to this page
// // the redirection-path is set in .env file
// // so these logics will render
// // these logics will check the db if a user notfind with the given id so we create a new pentaNetAccount in db
// export default async function afterSignUpPage() {
//   // get userId from clerk auth-hook.we know that the user is redirected from signup page so it has the userId. the auth() is only avalible in the server
//   const { userId } = auth();
//   // check if a user exist in db with this userId
//   const user = await prisma.userPentaNetAccount.findUnique({
//     where: { userClerkId: userId! },
//   });
//   if (user) {
//     // if the user exist in db so dont create a pentaNet account
//     redirect("/userProfile");
//   } else {
//     // create a new user in db with clerk user id
//     const newUser = await prisma.userPentaNetAccount.create({
//       data: {
//         userClerkId: userId!,
//       },
//     });
//     redirect("/userProfile");
//   }

//   return <div>afterSignupPage</div>;
// }
import { Paper, Typography } from "@mui/material";

const AfterSignupPage = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: "center",
        bgcolor: "secondary.dark",
        margin: "1rem",
        padding: "50px",
      }}
    >
      <Typography>ثبت نام شما با موفقیت انجام شد</Typography>
    </Paper>
  );
};

export default AfterSignupPage;
