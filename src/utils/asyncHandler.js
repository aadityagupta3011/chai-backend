const asyncHandler = (requestHandler) => {
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}
export { asyncHandler };















// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,
//     <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
//       <a class="navbar-brand" href="#">Title</a>
//       <ul class="nav navbar-nav">
//         <li class="active">
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Link</a>
//         </li>
//       </ul>
//     </nav>
//     )
//   } catch (error) {
//     res.status(err.code||500).json({
//       success:false,
//       message:err.message
//     })
//   }
// };
