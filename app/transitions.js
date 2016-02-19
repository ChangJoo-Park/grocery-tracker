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

  // Lists -> List
  this.transition(
    this.fromRoute('lists'),
    this.toRoute('list'),
    this.use('explode',{
      matchBy: 'data-card-id',
      use: ['flyTo', { duration: 500}]
    },{
      use: ['toLeft', { duration: 300, ease: 'spring' }]
    }),
    this.reverse('explode',{
      matchBy: 'data-card-id',
      use: ['flyTo', { duration: 500}]
    },{
      use: ['toRight', { duration: 300, ease: 'spring' }]
    })
  );

};

