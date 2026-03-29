export default function FormExample() {
  return (
    <form>
      <div className="form-group">
        <label className="control-sidebar-subheading">
          Turn off notifications
          <input type="checkbox" className="pull-right" />
        </label>
      </div>

      <div className="form-group">
        <label className="control-sidebar-subheading">
          Delete chat history
          <a href="#" className="text-red pull-right">
            <i className="fa fa-trash-o" />
          </a>
        </label>
      </div>
    </form>
  )
}