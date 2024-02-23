<template lang="html">
  <div>
    <SocialHead
      title="Membres du bureau - One Panthéon"
      description="Découvrez les X étudiants responsables de l'association"
    />
    <section id="team" class="container">
      <div v-for="category in member_list" :key="category.name" class="row">
        <div class="col s12 m4">
          <h3>{{ category.name }}</h3>
          <p>{{ category.desc }}</p>
        </div>
        <div class="col s12 l8 row center">
          <div v-for="member in category.members" :key="member.picture" class="col s12" :class="get_equal_column_value(category.members.length,'m')">
            <span class="avatar"> <img :src="pic_url(member.picture)" :alt="'photo de ' + member.firstName"> </span>
            <h5>{{ member.firstName }} <span class="surname">{{ member.surName }}</span></h5>
            <p>{{ member.caption }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      materialBoxInstance: null,
      pics_path: "./assets/photos/", // TODO: webpack require pour que ce soit dans src/assets au lieu de public/assets ?
      member_list: [
        {
          name: "Le bureau restreint",
          desc: "Le président représente le groupe tandis que le vice-président manage l'équipe. Quant aux autres rôles, ceux-ci sont assez explicites.",
          members: [
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Président" },
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Vice-Président" },
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Secrétaire" },
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Trésorier" }
          ]
        },
        {
          name: "Le bureau étendu",
          desc: "X",
          members: [
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Responsable X" },
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Responsable X" },
            { picture: "placeholder-square.jpg", firstName: "X", surName: "X", caption: "Responsable X" }
          ]
        },
      ]
    };
  },
  computed: {
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
    pic_url (picName) {
      return `${this.pics_path}${picName}`;
    },
    get_equal_column_value (arrayLength, columnName) {
      let value = 12;
      if (arrayLength > 4) {
        value = 3;
      } else if (arrayLength > 1) {
        value = 12 / arrayLength;
      }
      return `${columnName}${value}`
    }
  }
}
</script>

<style lang="css">
#team img {
  width: 10em;
  height: auto;

  max-width: 100%;
  border-radius: 50%;
  cursor: zoom-in;
}
#team img.active {
  cursor: zoom-out;
}
.person_card {
  margin: 0.5em;
  text-align: center;
}
.surname {
  font-variant: small-caps;
}

@media only screen and (min-width: 993px) {
  #team.container {
    width: 85%;
  }
}
</style>
