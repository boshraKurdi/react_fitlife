import { useSnackbar } from 'notistack';
export default function List({ chipData, setChipData, meals }) {
  const { enqueueSnackbar } = useSnackbar();
  const newDta =
    meals &&
    meals[0]?.meal.map((data) => {
      return (
        <div key={data.id} className="detail-card">
          <img
            className="detail-img"
            src={data.media && data.media[0].original_url}
            alt="none"
          />
          <div className="detail-desc">
            <div className="detail-name">
              <h4>{data?.title}</h4>
              <p className="detail-sub">{data?.description}</p>
              <p className="price">{data.calories + " calories"}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setChipData((prevChipData) => [
                ...prevChipData,
                {
                  key: data.id,
                  label: data?.title,
                  contant: data.calories,
                  img: data.media[0].original_url,
                },
              ]);
              // dispatch(SetOpen({message:'add to order successfully!' , type: 'success'}));
              enqueueSnackbar(`add ${data?.title} successfully!`, { variant: 'success'});
            }}
            className="add_to_order"
          >
            add to order
          </button>
        </div>
      );
    });
  return (
    <div className="main-detail">
      <h2 className="main-title-bottom">choose Order</h2>
      <div className="detail-wrapper">{newDta}</div>
    </div>
  );
}
