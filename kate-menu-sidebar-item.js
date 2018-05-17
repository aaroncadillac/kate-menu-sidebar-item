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
      },
      ripple: {
        type: Boolean,
        value: false
      }
    };
  }
  itemClicked( item ) {
    this.set('status', true);
    this.dispatchEvent( new CustomEvent( 'item-selected', {
      detail: {
        values: {
          id: this.identifier,
          title: this.title
        }
      }
    }))
  }
}

window.customElements.define(KateMenuSidebarItem.is, KateMenuSidebarItem);
