import { filter } from '../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const findUser = ({ target: { value } }) => {
    dispatch(filter(value));
  };
  return (
    <div>
      <p
        style={{
          fontSize: '18px',
        }}
      >
        Find contact by name
      </p>
      <input
        type="text"
        onChange={findUser}
        style={{
          border: '1px solid black',
          padding: '3px 3px',
          borderRadius: '7px',
        }}
      />
    </div>
  );
};

// export const Filter = ({ find }) => {

//   const findContact = event => {
//     setFilter(event.target.value);
//   };

//   return (
//     <div>
//       <p
//         style={{
//           fontSize: '18px',
//         }}
//       >
//         Find contact by name
//       </p>
//       <input
//         type="text"
//         onChange={find}
//         style={{
//           border: '1px solid black',
//           padding: '3px 3px',
//           borderRadius: '7px',
//         }}
//       />
//     </div>
//   );
// };
