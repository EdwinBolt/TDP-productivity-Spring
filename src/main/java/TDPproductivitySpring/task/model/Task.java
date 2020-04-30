package TDPproductivitySpring.task.model;


import TDPproductivitySpring.project.model.Project;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;
    int duration;
    String description;
    LocalDate deadline;
    String status;     // to do, in progress, done

    @ManyToOne
//    @JsonBackReference
    @JoinColumn(name = "project_id")
    public Project project;
    public Task() {    }

    public Task(int id, String name, int duration, String description, LocalDate deadline, String status, Project project) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.description = description;
        this.deadline = deadline;
        this.status = status;
        this.project = project;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", duration=" + duration +
                ", description='" + description + '\'' +
                ", deadline=" + deadline +
                ", status=" + status +
                ", project=" + project +
                '}';
    }
}
