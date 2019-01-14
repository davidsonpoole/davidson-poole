import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.area}>
                        <h1>Davidson Poole</h1>
                        <h2>Developer, Musician, and Entrepreneur</h2>
                        <h2>This is more content</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <br />
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, velit imperdiet ultrices dignissim, tortor ipsum pulvinar est, non dignissim tellus eros sit amet mi. Donec efficitur euismod risus, ac maximus nisl mollis sed. Phasellus a laoreet enim, id pharetra lectus. Nam vel gravida nisl. Sed massa est, dapibus quis imperdiet eu, rutrum in lorem. Sed in ornare ex. Nunc feugiat commodo diam, eu condimentum magna accumsan ut. Nunc pretium ultrices libero in pellentesque. Nullam lorem ligula, semper nec laoreet mattis, pulvinar vel neque. Maecenas quis porttitor sem. Ut quis varius eros.

                        Duis fringilla sed risus vitae euismod. Sed suscipit ex quis gravida iaculis. Sed eu malesuada quam. Etiam semper maximus nisi, a sagittis magna tempor quis. Etiam sapien odio, aliquam ut efficitur vitae, elementum nec enim. Vivamus sem nulla, tempus quis mollis vitae, hendrerit nec nulla. Proin sed magna blandit quam vestibulum convallis ut in dolor. Nullam convallis lorem non vulputate faucibus.

                        Nullam quis sem aliquet nulla semper congue sed at tortor. Phasellus vel dolor non libero posuere rhoncus. Nam ac eros ultrices sem malesuada rhoncus a vestibulum ex. Nulla euismod vitae magna non aliquet. Maecenas a odio semper, sagittis sem et, tristique sem. Vivamus neque eros, tempus vel elit id, facilisis iaculis nibh. Phasellus interdum, mi in ultricies pellentesque, nibh erat luctus massa, ac accumsan ipsum lorem eu neque. In lorem nulla, malesuada nec hendrerit non, porttitor at velit. Nunc consequat sem consectetur mollis vulputate. In hac habitasse platea dictumst. In vestibulum urna eu mauris rutrum, nec rhoncus diam sagittis. Nullam orci sem, blandit in mauris eu, volutpat pulvinar velit. Maecenas ut laoreet purus, at varius libero. Cras suscipit justo eget aliquet porttitor. Pellentesque consequat consequat enim ac consequat. Sed vitae porttitor diam.

                        Donec vel dolor at massa vehicula pretium. In hac habitasse platea dictumst. Nulla eu ante id lorem efficitur dapibus ut ac nibh. Nam suscipit erat erat, sit amet posuere sem luctus in. Nunc sed dui semper, rutrum nisl ac, porta orci. Proin rutrum facilisis risus eget pretium. Mauris sit amet tellus id odio bibendum laoreet. Nunc ac varius nulla. Donec tristique ipsum sed accumsan sagittis. Integer vestibulum imperdiet neque, vitae dapibus tortor auctor at. Morbi sollicitudin, risus eget congue elementum, nisi sem sagittis metus, eu semper urna odio eu erat.

                        Cras in felis sed orci accumsan ullamcorper. Vivamus nec vulputate tortor, et blandit neque. Curabitur ac sem nisl. Morbi nec venenatis lectus. Pellentesque fermentum, eros ut consectetur euismod, magna tellus viverra urna, eget accumsan diam eros pretium nisi. Aenean vestibulum tortor at dolor tristique, in mollis nisi tempor. Etiam porta mauris vel volutpat volutpat. Pellentesque sed dignissim purus.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;
