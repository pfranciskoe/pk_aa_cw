class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = $(el).data("user-id");
        this.followState = $(el).data("initial-follow-state"); 
        this.render();
        this.handleClick();
    };
    render() {
        if (this.followState) {
            this.$el.text("Unfollow!")
        } else{
            this.$el.text("Follow!")
        };

    };
    handleClick(){
        let that = this;
        $('.follow-toggle').on('click',e=>{
            e.preventDefault();
            console.log(that.followState);
            if (that.followState) {
                that.$el.prop('disabled',true)
                $.ajax ({
                    type:'DELETE',
                    url: `/users/${that.userId}/follow`,
                    dataType: "JSON"
                }).then(()=>{
                    
                    that.followState = !that.followState;
                    that.$el.prop('disabled',false)
                    that.render();
                })
            } else {
                that.$el.prop('disabled',true)
                $.ajax ({
                    type:'POST',
                    url: `/users/${that.userId}/follow`,
                    dataType: "JSON"
                }).then(() => {
                    that.followState = !that.followState;
                    that.$el.prop('disabled', false)
                    that.render();
                })
            }
            
        })
    }

};
module.exports = FollowToggle;