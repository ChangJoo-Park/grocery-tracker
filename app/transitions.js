export default function(){
  let duration = 500;
  this.transition(
    this.fromRoute('lists.index'),
    this.toRoute('lists.new'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // Admin -> Lists
  this.transition(
    this.fromRoute('lists.index'),
    this.toRoute('admin'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // Lists -> List

};

