'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Category extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: [],
      isOnPanels: false,
      isPanelsShow: false
    };

    let seft = this;

    ['handleEnter', 'handleLeave', 'handlePanelsEnter', 'handlePanelsLeave'].forEach(function (handler) {
      seft[handler] = seft[handler].bind(seft);
    });
  }

  handleEnter(e) {
    // e.stopPropagation();
    //  e.nativeEvent.stopImmediatePropagation();
    this.timer && clearTimeout(this.timer);
    let idx = e.currentTarget.getAttribute('data-index');
    let show = [];
    show[idx] = { isOpen: true };
    this.setState({
      show: show,
      isOnPanels: false,
      isPanelsShow: true
    });
  }

  handleLeave(e) {
    // e.stopPropagation();
    // e.preventDefault()
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.state.isOnPanels) return;
      this.setState({
        show: [],
        isOnPanels: false,
        isPanelsShow: false
      });
    }, 100);
  }

  handlePanelsEnter(e) {
    e.stopPropagation();
    this.timer && clearTimeout(this.timer);
    // this.setState({
    // 	isOnPanels: true
    // });
  }

  handlePanelsLeave(e) {
    e.stopPropagation();
    this.timer && clearTimeout(this.timer);
    this.setState({
      show: [],
      isOnPanels: false,
      isPanelsShow: false
    });
  }

  render() {
    const { category } = this.props;
    const lists = category.map((cate, index) => {
      if (index == 15) return null;

      const list = cate.subCategory.map((item, idx) => _react2.default.createElement(
        'a',
        { key: item.code, target: '_blank', href: '/c/' + item.code, title: item.name },
        item.name
      ));

      let isOpen = this.state.show && this.state.show[index] && this.state.show[index].isOpen;

      return _react2.default.createElement(
        'li',
        { key: cate.code, className: isOpen ? 'chose item-' + cate.code : 'item-' + cate.code, 'data-index': index, onMouseEnter: this.handleEnter, onMouseLeave: this.handleLeave },
        _react2.default.createElement('i', { className: 'icon' }),
        _react2.default.createElement(
          'a',
          { className: 'big', target: '_blank', href: '/c/' + cate.code, title: cate.name },
          cate.name
        ),
        list,
        _react2.default.createElement('i', { className: 'arrow' })
      );
    });

    const panels = category.map((cate, index) => {
      if (index == 15) return null;

      const secondCate = cate.categories.map((item, idx) => {

        const thirdCate = item.categories.map((v, i) => _react2.default.createElement(
          'a',
          { key: v.code, target: '_blank', href: '/c/' + v.code, title: v.name },
          v.name
        ));

        return _react2.default.createElement(
          'dl',
          { key: item.code },
          _react2.default.createElement(
            'dt',
            null,
            _react2.default.createElement(
              'a',
              { target: '_blank', href: '/c/' + item.code, title: item.name },
              _react2.default.createElement(
                'span',
                null,
                item.name
              ),
              _react2.default.createElement('i', { className: 'arrow' })
            )
          ),
          _react2.default.createElement(
            'dd',
            null,
            thirdCate
          )
        );
      });

      let isOpen = this.state.show && this.state.show[index] && this.state.show[index].isOpen;

      return _react2.default.createElement(
        'div',
        { key: cate.code, className: isOpen ? 'panel open' : 'panel' },
        secondCate
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'mod-cate' },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('i', { className: 'icon' }),
          '\u5168\u90E8\u5206\u7C7B'
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'lists' },
        lists
      ),
      _react2.default.createElement(
        'div',
        { className: this.state.isPanelsShow ? 'panels open' : 'panels', onMouseEnter: this.handlePanelsEnter, onMouseLeave: this.handlePanelsLeave },
        panels
      )
    );
  }
}

exports.default = Category;