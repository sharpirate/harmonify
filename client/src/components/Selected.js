import Section from './Section';
import Record from './Record';
import { connect } from 'react-redux';

function Selected({ name, img, id }) {
  return (
    <Section name="Selected Artist">
      <Record name={name} img={img} id={id} selected />
    </Section>
  );
}

function mapStateToProps(state) {
  return {
    name: state.selectedArtist.name,
    img: state.selectedArtist.img
  }
}

export default connect()(Selected);