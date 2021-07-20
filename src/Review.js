function ReviewBox() {
  const users = [
    {
      id: 1,
      name: 'Erlangga Hendrika',
      review: 'React is great !!!',
      photo:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      name: 'Dika Prtama',
      review: 'Come to learn React',
      photo:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 3,
      name: 'Hendrika Putra',
      review: 'Create application with React is amazing',
      photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const listReview = users.map((user) => {
    return (
      <div key={user.id} className="Item">
        <img src={user.photo} alt="icon" />
        <div className="User">
          <h3>{user.name}</h3>
          <p>{user.review}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default ReviewBox;
