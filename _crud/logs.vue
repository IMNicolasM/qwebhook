<template>
  <master-modal
      v-model="showModal"
      @hide="resetModal()"
      :title="log ? `ID: ${log.hook.id} - Hook (${log.hook.title})` : ''"
  >
    <div class="q-pa-sm" v-if="!!log" style="min-height: 150px;">
      <section>
        <p class="text-subtitle1 text-blue-grey">{{ $tr('iwebhooks.cms.form.httpStatus') }}: <b>{{ log.httpStatus }}</b></p>
      </section>
      <section class="q-mt-sm">
        <p class="text-subtitle2">{{ $tr('iwebhooks.cms.form.response') }}:</p>
        {{ log.response }}
      </section>
    </div>
  </master-modal>
</template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid(),
      showModal: false,
      log: null
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qwebhook.entityNames.log"),
        apiRoute: 'apiRoutes.qwebhook.logs',
        permission: 'iwebhooks.logs',
        create: false,
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', action: (col) => this.openModal(col)},
            {
              name: 'hook',
              label: this.$tr('iwebhooks.cms.title.hook'),
              field: 'hook',
              align: 'left',
              format: val => val ? val.title : '-',
              action: (col) => this.openModal(col)
            },
            {name: 'httpStatus', label: this.$tr('iwebhooks.cms.form.httpStatus'), field: 'httpStatus', align: 'left'},
            {name: 'response', label: this.$tr('iwebhooks.cms.form.response'), field: 'response', align: 'rigth'},
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {
              name: 'updated_at', label: this.$tr('isite.cms.form.updatedAt'), field: 'updatedAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'hook'},
        },
        update: false,
        delete: false
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  },
  methods: {
    resetModal() {
      this.showModal = false
    },
    openModal(log) {
      this.log = log
      this.showModal = true
    }
  }
}
</script>
