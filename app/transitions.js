export default function(){
  // Will run if the current media type is mobile
  this.transition(
    this.media('mobile'), // You could use a keyword or even a media query here
    this.fromRoute('lists.index'),
    this.toRoute('lists.new'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // Will run if the current media type is desktop
  this.transition(
    this.media('desktop'),
    this.fromRoute('lists.index'),
    this.toRoute('lists.new'),
    this.use('toDown'),
    this.reverse('toLeft')
  );

};
