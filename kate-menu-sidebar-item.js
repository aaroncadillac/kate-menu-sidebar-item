class KateMenuSidebarItem extends Polymer.Element {
  static get is() { return 'kate-menu-sidebar-item'; }
  static get properties() {
    return {
      tooltip: {
        type: String,
        value: ''
      },
      icon: {
        type: String,
        value: ''
      },
      title: {
        type: String,
        value: ''
      },
      status: {
        type: Boolean,
        value: false
      },
      customStyle: {
        type: String,
        value: ''
      },
      identifier: {
        type: String,
        value: ''
      }
    };
  }
  itemClicked( item ) {
    this.dispatchEvent( new CustomEvent( 'item-selected', {
      detail: {
        values: {
          id: this.identifier,
          title: this.title
        }
      },
      bubbles: true
    }))
  }
}

window.customElements.define(KateMenuSidebarItem.is, KateMenuSidebarItem);
