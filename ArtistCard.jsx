// import React from 'react';

// const ArtistCard = () => {}

// function PostItem(props) {
//   const { title, image, excerpt, date, id } = props.post;

//   const postId = id;

//   const formattedDate = new Date(date).toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });

//   const linkPath = `/posts/${postId}`;

//   return (
//     <li className={classes.post}>
//       <Link href={linkPath}>
//         <a>
//           <div className={classes.image}>
//             <Image
//               src={image}
//               alt={title}
//               width={300}
//               height={200}
//               layout="responsive"
//             />
//           </div>
//           <div className={classes.content}>
//             <h3>{title}</h3>
//             <time>{formattedDate}</time>
//             <p>{excerpt}</p>
//           </div>
//         </a>
//       </Link>
//     </li>
//   );
// }

// export default PostItem;
