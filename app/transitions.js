export default function(){
  let duration = 500;
  this.transition(
    this.fromRoute('lists.index'),
    this.toRoute('lists.new'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('lists.index'),
    this.toRoute('lists.list'),
    this.use('fade'),
    this.reverse('explode', {
      use: 'fade'
    })
  );
};

