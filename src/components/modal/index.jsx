import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";

const Modal = () => {
  const dispatch = useDispatch();
  const { detailId } = useSelector((store) => store.detail);

  useEffect(() => {
    //if there is ID, stop function
    if (!detailId) return;
    // Or, get the details of the flight
    dispatch(getDetails(detailId));
  }, [detailId]);

  return (
    detailId && (
      <div>
        <h1>Modal</h1>
        <h1>{detailId}</h1>
      </div>
    )
  );
};

export default Modal;
