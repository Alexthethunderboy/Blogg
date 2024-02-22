// import Homepage from "./Home/page";
// import ProfileIndex from "./profile/page";

import Homepage from "./Home/page";


export default function Home() {
  // app.use((req, res, next) => {
  //   res.header({"Access-Control-Allow-Origin": "*"});
  //   next();
  // }) 

  return (
    <main className="">
      <div>
        <Homepage/>
        {/* <ProfileIndex/> */}
      </div>
    </main>
  );
}
