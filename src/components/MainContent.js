import React, { Component } from 'react'

class MainContent extends Component {
  handleLeftContentQuests = () => {
    if (this.props.questStatus) {
      return 'quest-content'
    } else {
      return 'no-display'
    }
  }

  handleLeftContentCompleted = () => {
    if (this.props.completedStatus) {
      return 'completed-content'
    } else {
      return 'no-display'
    }
  }

  handleRightContentDesc = () => {
    if (this.props.descriptionStatus) {
      return 'quests-description-content'
    } else {
      return 'no-display'
    }
  }

  handleRightContentRewards = () => {
    if (this.props.rewardStatus) {
      return 'reward-content'
    } else {
      return 'no-display'
    }
  }

  render() {
    return (
      <div className='mid-content-holder'>
        <div className='quests'>
          <div className={this.handleLeftContentQuests()} id='left-scroll'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
            tempus ipsum. Nunc elementum bibendum malesuada. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aenean quis dictum urna. Cras faucibus metus eget elit tempus
            mollis. Fusce aliquet nisi vel rutrum volutpat. Mauris vehicula
            tincidunt tortor, aliquam placerat nibh vestibulum vel. Morbi vitae
            leo semper, finibus tellus vitae, molestie tortor. Duis porttitor
            purus egestas odio fermentum fringilla. Pellentesque facilisis
            tempor risus, quis sodales tellus tempor nec. Aenean consequat
            libero a laoreet ultrices. Donec ultrices in neque nec fermentum.
            Nulla tempor neque a dolor tempor, et eleifend ligula molestie.
            Morbi ultricies sodales dictum. Mauris ullamcorper rutrum lorem, id
            convallis turpis molestie eu. Sed purus augue, viverra et est eu,
            volutpat rutrum velit. Duis at dictum libero, at gravida dui.
            Suspendisse rutrum ullamcorper tellus sit amet egestas. Fusce
            sollicitudin tincidunt lobortis. Morbi vestibulum eu lectus ut
            consequat. Curabitur accumsan turpis ipsum. Morbi eget felis sit
            amet arcu venenatis placerat. Donec hendrerit scelerisque pulvinar.
            Sed ac justo a erat posuere consectetur. Sed semper non purus ac
            ullamcorper. Curabitur eleifend quis justo vulputate luctus. Mauris
            magna purus, faucibus vulputate est vitae, porta dignissim tellus.
            Duis justo est, malesuada vitae nunc non, pulvinar pharetra elit.
            Aenean venenatis sagittis orci, in pulvinar nisl facilisis vitae.
            Mauris rutrum laoreet turpis, ut aliquet mi imperdiet quis. Proin
            accumsan nisl quis neque pulvinar, eu ultricies ante imperdiet.
            Nullam a nunc sapien. Integer vitae mollis est. Quisque vulputate
            nisl elit, sed efficitur nunc maximus id. In id magna vitae urna
            maximus aliquam. Pellentesque libero dolor, tincidunt non fermentum
            vel, auctor ac metus. Morbi cursus diam at scelerisque egestas. Nam
            fringilla libero in erat semper mollis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus molestie viverra commodo.
            Curabitur semper eu erat sed lobortis. Integer sapien eros, congue
            quis lorem non, pellentesque faucibus est. Cras venenatis tortor a
            lacus gravida efficitur. Quisque faucibus maximus tortor vitae
            consequat. Donec finibus molestie porta. Pellentesque quis hendrerit
            turpis, a dapibus sapien. Etiam fermentum dignissim consequat.
            Nullam enim orci, tempus vitae laoreet non, molestie et nisi.
            Praesent in tellus tortor. Proin non blandit est, nec egestas nisi.
            Ut vestibulum id risus et rhoncus.
          </div>

          <div className={this.handleLeftContentCompleted()} id='left-scroll'>
            Hello
          </div>
        </div>

        <div className='quests-description'>
          <div className={this.handleRightContentDesc()} id='right-scroll'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
            tempus ipsum. Nunc elementum bibendum malesuada. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aenean quis dictum urna. Cras faucibus metus eget elit tempus
            mollis. Fusce aliquet nisi vel rutrum volutpat. Mauris vehicula
            tincidunt tortor, aliquam placerat nibh vestibulum vel. Morbi vitae
            leo semper, finibus tellus vitae, molestie tortor. Duis porttitor
            purus egestas odio fermentum fringilla. Pellentesque facilisis
            tempor risus, quis sodales tellus tempor nec. Aenean consequat
            libero a laoreet ultrices. Donec ultrices in neque nec fermentum.
            Nulla tempor neque a dolor tempor, et eleifend ligula molestie.
            Morbi ultricies sodales dictum. Mauris ullamcorper rutrum lorem, id
            convallis turpis molestie eu. Sed purus augue, viverra et est eu,
            volutpat rutrum velit. Duis at dictum libero, at gravida dui.
            Suspendisse rutrum ullamcorper tellus sit amet egestas. Fusce
            sollicitudin tincidunt lobortis. Morbi vestibulum eu lectus ut
            consequat. Curabitur accumsan turpis ipsum. Morbi eget felis sit
            amet arcu venenatis placerat. Donec hendrerit scelerisque pulvinar.
            Sed ac justo a erat posuere consectetur. Sed semper non purus ac
            ullamcorper. Curabitur eleifend quis justo vulputate luctus. Mauris
            magna purus, faucibus vulputate est vitae, porta dignissim tellus.
            Duis justo est, malesuada vitae nunc non, pulvinar pharetra elit.
            Aenean venenatis sagittis orci, in pulvinar nisl facilisis vitae.
            Mauris rutrum laoreet turpis, ut aliquet mi imperdiet quis. Proin
            accumsan nisl quis neque pulvinar, eu ultricies ante imperdiet.
            Nullam a nunc sapien. Integer vitae mollis est. Quisque vulputate
            nisl elit, sed efficitur nunc maximus id. In id magna vitae urna
            maximus aliquam. Pellentesque libero dolor, tincidunt non fermentum
            vel, auctor ac metus. Morbi cursus diam at scelerisque egestas. Nam
            fringilla libero in erat semper mollis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus molestie viverra commodo.
            Curabitur semper eu erat sed lobortis. Integer sapien eros, congue
            quis lorem non, pellentesque faucibus est. Cras venenatis tortor a
            lacus gravida efficitur. Quisque faucibus maximus tortor vitae
            consequat. Donec finibus molestie porta. Pellentesque quis hendrerit
            turpis, a dapibus sapien. Etiam fermentum dignissim consequat.
            Nullam enim orci, tempus vitae laoreet non, molestie et nisi.
            Praesent in tellus tortor. Proin non blandit est, nec egestas nisi.
            Ut vestibulum id risus et rhoncus.
          </div>

          <div className={this.handleRightContentRewards()}>Hi</div>
        </div>
      </div>
    )
  }
}

export default MainContent
