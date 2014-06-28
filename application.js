(function($){
  'use strict';

  /* Fetch event data from Meetup and insert into page */

  if ($('#nextEvent').size() > 0) {
    $.get('http://api.meetup.com/2/events?group_id=8008702&status=upcoming&order=time&limited_events=False&desc=false&offset=0&format=json&page=1&fields=&sig_id=8304535&sig=0ebddfa32cb4043b7bab3ee80fdee18145a34cbe&callback=?',
      function(data){
        var meetup = data.results[0]
        meetup.date = moment(meetup.time)

        $('#nextEvent').html(
          '<h3 class="event-title"><a href="' + meetup.event_url + '">' + meetup.name + '</a></h3>' +
          '<p>' + ' ' + meetup.date.format('dddd, MMMM D, YYYY') + '</p>' +
          '<p>' + meetup.date.format('h:mma') + ' at ' + meetup.venue.name + '</p>'
        )
        $('#nextEventFromNow').text('Our next event is ' + meetup.date.fromNow() + ':')
      }, 'jsonp')
  }
})(jQuery)
