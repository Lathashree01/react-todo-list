import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class DialogBox extends React.Component {
    constructor(props) {
        super(props);
        this.passToParent = this.passToParent.bind(this);
    }
    passToParent() {
        this.props.onChangeState(false);
    }
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.passToParent}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">{"Info"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Can't add empty To-do
        </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.passToParent} color="primary" autoFocus> Ok </Button>
                </DialogActions>
            </Dialog>
        );

    }
}

export default DialogBox;