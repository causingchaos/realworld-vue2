<template>
  <div>
    <h1>Events Listings</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '../services/EventService';
import EventCard from '../components/EventCard.vue';

export default {
  data() {
    return {
      events: [],
    };
  },
  components: {
    EventCard,
  },
  created() {
    EventService.getEvents()
    // axios.get('http://localhost:3000/events')
      .then((response) => {
        console.log(response.data);
        this.events = response.data;
      });
  },
};
</script>
