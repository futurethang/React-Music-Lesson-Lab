// https://www.codeproject.com/Articles/1202580/Build-a-Metronome-in-React
import React, { Component } from "react";

const styles = {
  finishedFeature: {
    background: "#DCF7DD"
  }
};

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const controlsProps = this.props;

    return (
      <div className="CONTROLS">
        <div className="buttons are-small level">
          <a
            class="button is-info is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              controlsProps.saveLesson();
            }}
          >
            Save Lesson Plan (video list and notes)
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Share Lesson Plan
          </a>

          <a
            style={styles.finishedFeature}
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              controlsProps.setSidebarState("SEARCH"); // THIS NEEDS TO BE MORE DYNAMIC
            }}
          >
            New Search
          </a>

          {this.props.controlFrameState !== "NOTES" ? (
            <a
              style={styles.finishedFeature}
              class="button is-primary is-inverted"
              className="spaced button is-rounded"
              onClick={e => {
                controlsProps.setSidebarState("NOTES");
              }}
            >
              Notes
            </a>
          ) : (
            <a
              style={styles.finishedFeature}
              class="button is-primary is-inverted"
              className="spaced button is-rounded"
              onClick={e => {
                controlsProps.setSidebarState("LESSONMODE"); // THIS NEEDS TO BE MORE DYNAMIC
              }}
            >
              Close Notes
            </a>
          )}
          <a
            style={styles.finishedFeature}
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              controlsProps.setSidebarState("LESSONLIST");
            }}
          >
            View all lesson plans
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Tuner
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Metronome
          </a>
          <a
            style={styles.finishedFeature}
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={this.props.togglePlaylist} // ADD DEFAUL WHEN CLICKED IT DEACTIVATES NOTES
          >
            Toggle Search/Lesson video list view
          </a>
        </div>
      </div>
    );
  }
}
