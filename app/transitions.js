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
    this.fromRoute('admin'),
    this.toRoute('lists'),
    this.use('toUp'),
    this.reverse('toDown')
  );
};

