package TDPproductivitySpring.task.model;

import java.time.LocalTime;

public class ProjectTime {
    LocalTime totalTime;

    public ProjectTime() {
    }

    public ProjectTime(LocalTime totalTime) {
        this.totalTime = totalTime;
    }


    public LocalTime getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(LocalTime totalTime) {
        this.totalTime = totalTime;
    }

    @Override
    public String toString() {
        return "ProjectTime{" +
                "totalTime=" + totalTime +
                '}';
    }
}
