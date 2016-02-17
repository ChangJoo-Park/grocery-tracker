export default function(){
  this.transition(
    this.fromRoute('lists.index'),
    this.toRoute('lists.new'),
    this.use('toUp'),
    this.reverse('toDown')
  );
};
